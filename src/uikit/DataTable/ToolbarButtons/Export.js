import React from 'react';
import { ToolbarItem, ToolbarButton, FileDownloadIcon } from './styles';
import { saveAs } from 'file-saver';
import { trackUserInteraction, TRACKING_EVENTS } from 'services/analyticsTracking';

const exportTSV = (data, columns, filename) => {
  const visibleCols = columns.filter(c => c.show && !c.skipExport);
  const headers = visibleCols.map(h => h.exportHeader || h.Header).join('\t');
  const rows = data.map(d => visibleCols.map(header => d[header.accessor]).join('\t')).join('\n');

  const blob = new Blob([headers + '\n' + rows], { type: 'data:text/tab-separated-values' });
  trackUserInteraction({
    category: TRACKING_EVENTS.categories.entityPage.file,
    action: TRACKING_EVENTS.actions.download.report,
    label: filename,
  });
  saveAs(blob, `${filename}.tsv`);
};

const Export = ({ exporter = x => x, data, columns, downloadName, ...props }) => (
  <ToolbarItem onClick={() => exportTSV(data, columns, downloadName)} {...props}>
    <FileDownloadIcon width="12" height="12px" fill="#008299" style={{ marginRight: '7px' }} />
    <ToolbarButton>EXPORT</ToolbarButton>
  </ToolbarItem>
);

export default Export;
