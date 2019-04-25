import urlJoin from 'url-join';
import { personaApiRoot } from 'common/injectGlobals';

// TODO: Issue #321
// acceptedKfOptIn
// acceptedNihOptIn
const DEFAULT_FIELDS = `
  _id
  title
  firstName
  lastName
  egoId
  roles
  acceptedTerms
  email
  institutionalEmail
  eraCommonsID
  department
  story
  bio
  jobTitle
  institution
  addressLine1
  addressLine2
  city
  state
  country
  zip
  phone
  website
  googleScholarId
  twitter
  facebook
  github
  linkedin
  orchid
  interests
  acceptedKfOptIn
  acceptedNihOptIn
  acceptedDatasetSubscriptionKfOptIn
  sets {
    name
    size
    type
    setId
  }
`;

const url = urlJoin(personaApiRoot, 'graphql');

export const getProfile = api => async () => {
  const { data: { self } } = await api({
    url,
    body: {
      query: `
        query {
          self {
            ${DEFAULT_FIELDS}
          }
        }
      `,
    },
  });

  return self;
};

export const createProfile = api => async ({ egoId, lastName, firstName, email }) => {
  const { data: { userCreate: { record } } } = await api({
    url,
    body: {
      variables: { egoId, lastName, firstName, email },
      query: `
        mutation($egoId: String, $firstName: String, $lastName: String, $email: String) {
          userCreate(record:{egoId: $egoId, firstName: $firstName, lastName: $lastName, email: $email}) {
            record {
              ${DEFAULT_FIELDS}
            }
          }
        }
      `,
    },
  });
  return record;
};

export const updateProfile = api => async ({ user }) => {
  const { data: { userUpdate: { record } } } = await api({
    url,
    body: {
      variables: { record: user },
      query: `
        mutation($record: UpdateByIdUserModelInput!) {
          userUpdate(record: $record) {
            record {
              ${DEFAULT_FIELDS}
            }
          }
        }
      `,
    },
  });

  return record;
};

export const deleteProfile = api => async ({ user }) => {
  const { data: { userRemove: { recordId } } } = await api({
    url,
    body: {
      variables: { _id: user._id },
      query: `
        mutation($_id: MongoID!) {
          userRemove(_id: $_id) {
            recordId
          }
        }
      `,
    },
  });

  return recordId;
};

export const getTags = api => async ({ filter, size }) => {
  const { data: { tags } } = await api({
    url,
    body: {
      variables: { model: 'User', field: 'interests', filter, size },
      query: `
        query($model: String! $field: String! $filter: String $size: Int) {
          tags(model: $model, field: $field, filter: $filter, size: $size) {
            count
            values {
              count
              value
            }
          }
        }
      `,
    },
  });
  return tags;
};

export const getAllFieldNamesPromise = api => {
  return api({
    url: urlJoin(personaApiRoot, 'graphql'),
    body: {
      query: `
        query {
        __type(name: "UserModel") {
          fields {
            name
            type {
              name
            }
          }
        }
      }`,
    },
  });
};
