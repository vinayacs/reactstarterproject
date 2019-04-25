import styled from 'react-emotion';

export const Pagination = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .-pagination {
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 3px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  .-pagination input,
  .-pagination select {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 5px 7px;
    font-size: inherit;
    border-radius: 3px;
    font-weight: normal;
    outline: none;
  }
  .-pagination .-btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 3px;
    padding: 6px;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
    cursor: pointer;
    outline: none;
  }
  .-pagination .-btn[disabled] {
    opacity: 0.5;
    cursor: default;
  }
  .-pagination .-btn:not([disabled]):hover {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  .-pagination .-previous,
  .-pagination .-next {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
  }
  .-pagination .-center {
    -webkit-box-flex: 1.5;
    -ms-flex: 1.5;
    flex: 1.5;
    text-align: center;
    margin-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .-pagination .-pageInfo {
    display: inline-block;
    margin: 3px 10px;
    white-space: nowrap;
  }
  .-pagination .-pageJump {
    display: inline-block;
    border: solid 1px lightgrey;
    border-radius: 5px;
  }
  .-pagination .-pageJump input {
    width: 70px;
    text-align: center;
  }
  .-pagination .-pageSizeOptions {
    margin: 3px 10px;
  }

  .-pagination_button {
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    color: grey;
    user-select: none;
  }

  .-pagination_button.-current {
    background: #f0f1f6;
    color: #009bb8;
  }
`;
