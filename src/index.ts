import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the sdhummad-test-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'sdhummad-test-extension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension sdhummad-test-extension is activated!');
  }
};

export default extension;
