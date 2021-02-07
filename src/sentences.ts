export default new Map([
  ['Addition', [
    { label: 'Furthermore, ...', snippet: 'Furthermore, ${1:[...]}' },
    { label: 'Likewise, ...', snippet: 'Likewise, ${1:[...]}' }
  ]],
  ['Compare', [
    { label: 'more [noun] than', snippet: 'more ${1:[noun]} than' },
    { label: 'less [noun] than', snippet: 'less ${1:[noun]} than' }
  ]],
  ['Conclusion', [
    { label: 'In summary, ...', snippet: 'In summary, ${1:[...]}' }
  ]],
  ['Conditional', [
    { label: 'If [present simple], [present simple]', snippet: 'If ${1:[present simple]}, ${2:[present simple]}' },
    { label: 'If [present simple], [will infinitive]', snippet: 'If ${1:[present simple]}, ${2:[will infinitive]}' },
    { label: 'If [past simple], [would infinitive]', snippet: 'If ${1:[past simple]}, ${2:[would infinitive]}' },
    { label: 'If [past perfect], [would perfect infinite]', snippet: 'If ${1:[past perfect]}, ${2:[would perfect infinite]}' }
  ]],
  ['Contrast', [
    { label: 'However, ...', snippet: 'However, ${1:[...]}' },
    { label: 'In another way ...', snippet: 'In another way ${1:[...]}' }
  ]],
  ['Conventional Commit', [
    { label: 'feat(scope): [jira] ...', snippet: 'feat${1:([scope])}: ${2:[...]}' },
    { label: 'fix(scope): [jira] ...', snippet: 'fix${1:([scope])}: ${2:[...]}' },
    { label: 'style(scope): [jira] ...', snippet: 'style${1:([scope])}: ${2:[...]}' },
    { label: 'refactor(scope): [jira] ...', snippet: 'refactor${1:([scope])}: ${2:[...]}' },
    { label: 'test(scope): [jira] ...', snippet: 'test${1:([scope])}: ${2:[...]}' },
    { label: 'docs(scope): [jira] ...', snippet: 'docs${1:([scope])}: ${2:[...]}' },
    { label: 'chore(scope): [jira] ...', snippet: 'chore${1:([scope])}: ${2:[...]}' },
    { label: 'BREAKING CHANGE: ...', snippet: 'BREAKING CHANGE: ${1:[...]}' }
  ]],
  ['Example', [
    { label: 'For example, ...', snippet: 'For example, ${1:[...]}' },
    { label: 'For instance, ...', snippet: 'For instance, ${1:[...]}' },
    { label: 'For instance, ...', snippet: 'For instance, ${1:[...]}' },
    { label: 'To give an illustration, ...', snippet: 'To give an illustration, ${1:[...]}'}
  ]],
  ['Opinion', [
    { label: 'In my opinion ...', snippet: 'In my opinion ${1:[...]}' },
    { label: 'If you ask me ...', snippet: 'If you ask me ${1:[...]}' }
  ]],
  ['Question', [
    { label: 'Do|Did you have [noun]?', snippet: '${1:[Do|Did]} you have ${2:[noun]}?' }
  ]],
  ['Request', [
    { label: 'Could you ...?', snippet: 'Could you ${1:[verb]}?' },
    { label: 'Would you mind ...?', snippet: 'Would you mind ${1:[verb]}?' }
  ]],
  ['Title', [
    { label: 'How to ...', snippet: 'How to ${1:[...]}' },
    { label: 'How ... to ...', snippet: 'How ${1:[...]} to ${2:[...]}' }
  ]]
])