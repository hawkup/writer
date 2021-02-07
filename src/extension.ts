import * as vscode from 'vscode';
import { SentencesCommand } from './sentences-command'

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('writer.sentences', () => {
    const command = new SentencesCommand()
    command.execute()
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
