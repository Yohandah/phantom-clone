export const defaultFilters = [
  {
    text: 'Launch Types',
    type: 'launchType',
    options: [
      { value: 'automatic', text: 'Automatic', isSelected: false },
      { value: 'manual', text: 'Manual', isSelected: false },
    ],
  },
  {
    text: 'Actions',
    type: 'actions',
    options: [
      { value: 'connect', text: 'Connect', isSelected: false },
      { value: 'message', text: 'Message', isSelected: false },
    ],
  },
  {
    text: 'Extractions',
    type: 'extractions',
    options: [
      { value: 'profilePages', text: 'Profiles Pages', isSelected: false },
      { value: 'searchResults', text: 'Search results', isSelected: false },
      { value: '', text: 'Emails', isSelected: false },
    ],
  },
  {
    text: 'Categories',
    type: 'categories',
    options: [
      { value: 'workflow', text: 'Workflow', isSelected: false },
      { value: 'linkedin', text: 'LinkedIn', isSelected: false },
      { value: 'salesNavigator', text: 'Sales Navigator', isSelected: false },
      { value: 'others', text: 'Others', isSelected: false },
    ],
  },
];
