const teamMembers = [
    { id: 1, name: 'SRDDonkey', role: 'Lead Developer', projectIds: [1] },
    { id: 2, name: 'PookyThePolak', role: 'Gameplay Programmer', projectIds: [1, 2] },
    { id: 3, name: 'Bluedrake42', role: 'Community Manager', projectIds: [1, 2] },
];

const projects = [
    {
        id: 1,
        name: "Operation: Harsh Doorstop",
        tasks: [
            // SRDDonkey
            { id: 1, memberId: 1, name: 'Core Gameplay Loop', startMonth: 0, endMonth: 3, completed: true, description: 'Implement the main player actions, objectives, and win/loss conditions.' },
            { id: 2, memberId: 1, name: 'AI Behavior Tree', startMonth: 4, endMonth: 6, completed: false },
            { id: 6, memberId: 1, name: 'Networking Refactor', startMonth: 10, endMonth: 14, completed: false, description: 'Improve network stability and performance, reduce latency.' },
            // PookyThePolak
            { id: 3, memberId: 2, name: 'Weapon System Implementation', startMonth: 1, endMonth: 5, completed: true },
            { id: 4, memberId: 2, name: 'Vehicle Physics', startMonth: 7, endMonth: 9, completed: false, description: 'Implement realistic physics for wheeled and tracked vehicles.' },
            { id: 7, memberId: 2, name: 'Animation Integration', startMonth: 12, endMonth: 15, completed: false },
            // Bluedrake42
            { id: 5, memberId: 3, name: 'Community Feedback Analysis', startMonth: 0, endMonth: 1, completed: true, description: 'Gather and analyze feedback from the community forums and social media.' },
            { id: 8, memberId: 3, name: 'Content Creator Outreach', startMonth: 8, endMonth: 11, completed: false },
             { id: 9, memberId: 3, name: 'Release Marketing Plan', startMonth: 16, endMonth: 18, completed: false },
        ],
        deadlines: [
            {
                monthIndex: 23, // December 2025
                name: "Full Release (Operation: Harsh Doorstop)",
                description: "Full release out of early access for Operation: Harsh Doorstop on Steam.",
                exactDate: "December 2025"
            }
        ]
    },
    {
        id: 2,
        name: "Isolation Sequence",
        tasks: [
            { id: 101, memberId: 1, name: 'Storyboarding', startMonth: 2, endMonth: 4, completed: true },
            { id: 102, memberId: 2, name: 'Environment Art Pass', startMonth: 5, endMonth: 8, completed: false, description: 'Create detailed environment assets and textures based on concept art.' },
            { id: 103, memberId: 1, name: 'Character Modeling', startMonth: 9, endMonth: 12, completed: false },
            { id: 104, memberId: 3, name: 'Script Writing', startMonth: 1, endMonth: 3, completed: true, description: 'Finalize the main storyline script and dialogue.' },
             { id: 105, memberId: 2, name: 'Sound Design', startMonth: 13, endMonth: 16, completed: false },
        ],
        deadlines: [
            {
                monthIndex: 21, // October 2025
                name: "Steam Next Fest (Isolation Sequence)",
                description: "Steam Next Fest for Isolation Sequence on Steam.",
                exactDate: "October 2025"
            },
            {
                monthIndex: 23, // December 2025
                name: "Early Access Release (Isolation Sequence)",
                description: "Release into early access for Isolation Sequence on Steam.",
                exactDate: "December 2025"
            },
            {
                monthIndex: 35, // December 2026
                name: "Full Release (Isolation Sequence)",
                description: "Full release for Isolation Sequence on Steam.",
                exactDate: "December 2026"
            }
        ]
    }
    // Add more projects here if needed
]; 