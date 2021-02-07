import { window, QuickPickItem, SnippetString } from 'vscode'
import sentenceGroups from './sentences'

type SentenceItem = QuickPickItem & { snippet: string }

export class SentencesCommand {
  identifier = 'sentences'

  execute(): void {
    const quickPick = window.createQuickPick()

    for (let sentenceGroup of sentenceGroups.keys()) {
      quickPick.items = [
        ...quickPick.items,
        {
          label: sentenceGroup
        }
      ]
    }

    quickPick.show()

    quickPick.onDidChangeSelection((items: QuickPickItem[]): void => {
      quickPick.hide()
      const [{ label }] = items

      this.createQuickPickSentence(label)
    })
  }

  createQuickPickSentence(groupKey: string): void {
    const sentences = sentenceGroups.get(groupKey)
    const quickPick = window.createQuickPick()

    sentences?.forEach(sentence => {
      quickPick.items = [
        ...quickPick.items,
        {
          label: sentence.label
        }
      ]
    })

    quickPick.show()

    quickPick.onDidChangeSelection((items: QuickPickItem[]) => {
      const [{ label }] = items
      const item = sentences?.find(sentence => sentence.label === label)
      window.activeTextEditor?.insertSnippet(new SnippetString(item?.snippet))
    })
  }
}