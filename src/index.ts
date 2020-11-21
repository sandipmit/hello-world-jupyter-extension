import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
import { Menu } from '@lumino/widgets';

import {IMainMenu} from '@jupyterlab/mainmenu';

/**
 * Initialization data for the sdhummad-test-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'sdhummad-test-extension',
  autoStart: true,
  requires : [ICommandPalette, IMainMenu],
  activate: (app: JupyterFrontEnd, 
            palette: ICommandPalette,
            mainMenu : IMainMenu) => {
    const { commands } = app;

    const command = 'jlab-examples:command';

    // Add a command
    commands.addCommand(command, {
      label: 'Execute jlab-examples:command Command',
      caption: 'Execute jlab-examples:command Command',
      execute: (args: any) => {
        const orig = args['origin'];
        console.log(`jlab-examples:command has been called from ${orig}.`);
        
        console.log(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
        window.alert(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
      }
    });

    const category = 'My Commands';
    palette.addItem({ command, category,  args: { origin: 'from palette' } })

    // Create a menu
    const tutorialMenu: Menu = new Menu({ commands });
    tutorialMenu.title.label = 'Test Menu';
    mainMenu.addMenu(tutorialMenu, { rank: 80 });

    // Add the command to the menu
    tutorialMenu.addItem({ command, args: { origin: 'from the menu' } });
  }
};

export default extension;
