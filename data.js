const teamMembers = [ // Shared team members for now
    { id: 1, name: 'Alice Wonderland', role: 'Frontend Developer' },
    { id: 2, name: 'Bob The Builder', role: 'Backend Developer' },
    { id: 3, name: 'Charlie Brown', role: 'Project Manager' },
    { id: 4, name: 'Diana Prince', role: 'UI/UX Designer' },
    { id: 5, name: 'Edward Scissorhands', role: 'QA Engineer' }
];

const projects = [
    {
        id: 1,
        name: "Project Phoenix",
        tasks: [
            // Alice
            { id: 1, memberId: 1, name: 'Task Alpha', startMonth: 0, endMonth: 2, color: '#bb86fc', completed: true }, // Jan '24 - Mar '24
            { id: 2, memberId: 1, name: 'Task Beta', startMonth: 3, endMonth: 4, color: '#cf6679', completed: true },  // Apr '24 - May '24
            { id: 11, memberId: 1, name: 'Task Gamma', startMonth: 10, endMonth: 13, color: '#ffab91', completed: false }, // Nov '24 - Feb '25 (Spans year)
            { id: 14, memberId: 1, name: 'Final Review', startMonth: 22, endMonth: 23, color: '#4db6ac', completed: false }, // Nov '25 - Dec '25
            // Bob
            { id: 3, memberId: 2, name: 'Feature X', startMonth: 1, endMonth: 3, color: '#03dac6', completed: true },   
            { id: 4, memberId: 2, name: 'Bugfix Y', startMonth: 4, endMonth: 5, color: '#f2f2f2', completed: true },    
            { id: 10, memberId: 2, name: 'Review', startMonth: 8, endMonth: 9, color: '#ce93d8', completed: false }, // <-- Let's make this one overdue if current date is past Sep '24
            { id: 12, memberId: 2, name: 'Feature Z', startMonth: 13, endMonth: 15, color: '#80cbc4', completed: false }, // Feb '25 - Apr '25
            { id: 13, memberId: 2, name: 'Urgent Fix', startMonth: 14, endMonth: 14, color: '#ef5350', completed: false }, // Mar '25
            // Charlie
            { id: 5, memberId: 3, name: 'Research Z', startMonth: 0, endMonth: 1, color: '#b0bec5', completed: true },  
            { id: 6, memberId: 3, name: 'Documentation', startMonth: 17, endMonth: 19, color: '#ffe082', completed: false },// Jun '25 - Aug '25
            // Diana
            { id: 7, memberId: 4, name: 'Deployment', startMonth: 6, endMonth: 8, color: '#81c784', completed: true },  
            { id: 8, memberId: 4, name: 'Testing', startMonth: 20, endMonth: 22, color: '#90caf9', completed: false }, // Sep '25 - Nov '25
            // Edward
            { id: 9, memberId: 5, name: 'Design Phase', startMonth: 2, endMonth: 5, color: '#f48fb1', completed: false }, // <-- Also potentially overdue 
        ]
    },
    {
        id: 2,
        name: "Project Griffin",
        tasks: [
            { id: 101, memberId: 1, name: 'Griffin Setup', startMonth: 0, endMonth: 0, color: '#a1887f', completed: true }, 
            { id: 102, memberId: 3, name: 'Griffin Core Dev', startMonth: 11, endMonth: 15, color: '#9fa8da', completed: false },  // Dec '24 - Apr '25
            { id: 103, memberId: 4, name: 'Griffin UI Mockups', startMonth: 13, endMonth: 14, color: '#fce4ec', completed: false }, // Feb '25 - Mar '25
            { id: 104, memberId: 5, name: 'Griffin API', startMonth: 16, endMonth: 18, color: '#dcedc8', completed: false }, 
            { id: 105, memberId: 2, name: 'Griffin Integration', startMonth: 19, endMonth: 21, color: '#fff9c4', completed: false }, 
            { id: 106, memberId: 1, name: 'Griffin Testing', startMonth: 22, endMonth: 22, color: '#bcaaa4', completed: false }, 
        ]
    },
     {
        id: 3,
        name: "Project Chimera",
        tasks: [
            { id: 201, memberId: 2, name: 'Chimera Planning', startMonth: 3, endMonth: 4, color: '#f48fb1', completed: true }, 
            { id: 202, memberId: 4, name: 'Chimera Backend', startMonth: 5, endMonth: 8, color: '#ce93d8', completed: false },  
            { id: 203, memberId: 1, name: 'Chimera Frontend', startMonth: 6, endMonth: 9, color: '#ef9a9a', completed: false }, 
        ]
    },
    {
        id: 4,
        name: "Operation Hydra",
        tasks: [
            { id: 301, memberId: 5, name: 'Hydra Research', startMonth: 0, endMonth: 2, color: '#80cbc4', completed: true }, 
            { id: 302, memberId: 3, name: 'Hydra Prototype', startMonth: 3, endMonth: 5, color: '#c5e1a5', completed: false },  
            { id: 303, memberId: 4, name: 'Hydra User Study', startMonth: 6, endMonth: 6, color: '#fff59d', completed: false }, 
        ]
    },
     {
        id: 5,
        name: "Project Leviathan",
        tasks: [
            { id: 401, memberId: 1, name: 'Leviathan Infra', startMonth: 8, endMonth: 10, color: '#90caf9', completed: false }, 
            { id: 402, memberId: 2, name: 'Leviathan Security Audit', startMonth: 11, endMonth: 11, color: '#ef5350', completed: false },  
        ]
    }
    // Add more projects here if needed
]; 

const globalDeadlines = [
    {
        monthIndex: 2, // March (0-indexed)
        name: "Q1 Review",
        description: "End of Quarter 1 review meeting with stakeholders. All relevant reports and presentations must be finalized.",
        exactDate: "March 28th"
    },
    {
        monthIndex: 5, // June
        name: "Alpha Release",
        description: "Target date for Alpha version release to internal testers. Key features A, B, C must be complete.",
        exactDate: "June 15th"
    },
    {
        monthIndex: 10, // November
        name: "Budget Planning FY25",
        description: "Finalize budget proposals for the next fiscal year (FY25).",
    },
    {
        monthIndex: 14, // March of the next year (e.g., 2025 if startYear is 2024)
        name: "Beta Showcase",
        description: "Internal showcase of the Beta version. All core functionalities should be stable.",
        exactDate: "March 20th"
    }
]; 