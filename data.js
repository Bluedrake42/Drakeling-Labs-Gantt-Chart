const teamMembers = [
    { id: 1, name: 'SRDDonkey', role: 'Lead Developer', projectIds: [1] },
    { id: 2, name: 'PookyThePolak', role: 'Gameplay Programmer', projectIds: [1, 2] },
    { id: 3, name: 'Bluedrake42', role: 'Community Manager', projectIds: [1, 2, 3, 4, 5] },
    { id: 4, name: 'WarriorJ', role: 'Contributor', projectIds: [1] },
    { id: 5, name: 'Eddcast', role: 'Contributor', projectIds: [1] },
    { id: 6, name: 'Putridi', role: 'Contributor', projectIds: [2] },
    { id: 7, name: 'Kartona', role: 'Contributor', projectIds: [2] },
    { id: 8, name: 'Assassin', role: 'Contributor', projectIds: [2] },
    { id: 9, name: 'MikeNike', role: 'Contributor', projectIds: [1] },
    { id: 10, name: 'AmBanan', role: 'Contributor', projectIds: [1] },
    { id: 11, name: 'Francisco', role: 'Contributor', projectIds: [1] },
    { id: 12, name: 'Abdeel', role: 'Contributor', projectIds: [1] },
    { id: 13, name: 'Pizzaman', role: 'Contributor', projectIds: [1] },
    { id: 14, name: 'MrPonchovie', role: 'Contributor', projectIds: [1] },
    { id: 15, name: 'Yoshi', role: 'Contributor', projectIds: [1] },
    { id: 16, name: 'Unassigned', role: 'Unassigned', projectIds: [1] },
    { id: 17, name: 'SpicyMelon', role: 'Marketing/Release Manager', projectIds: [3, 4] },
    { id: 18, name: 'PerpIDK', role: 'UI/UX Designer', projectIds: [1] }
];

const projects = [
    {
        id: 1,
        name: "Operation: Harsh Doorstop",
        tasks: [
            // AmBanan
            { 
                id: 2, 
                memberIds: [10], 
                name: 'Animation Set Completion', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 8 },   // August 2025
                completed: false, 
                description: 'All animations finished.' 
            },
            // MikeNike
            { 
                id: 4, 
                memberIds: [9], 
                name: 'Steering Wheel Animations', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false, 
                description: 'Steering wheel animations completed.' 
            },
            { 
                id: 23, 
                memberIds: [9], 
                name: 'Animations for leaning out vehicle windows and firing', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false, 
                description: 'Animations for leaning out vehicle windows and firing weapons.' 
            },
            { 
                id: 24, 
                memberIds: [9], 
                name: 'Technical Gunnery Animations', 
                startDate: { year: 2025, month: 7 }, // July 2025
                endDate: { year: 2025, month: 9 },   // September 2025
                completed: false, 
                description: 'Complete gunnery animations for Technical vehicles.' 
            },
            { 
                id: 25, 
                memberIds: [9], 
                name: 'Humvee Gunnery Animations', 
                startDate: { year: 2025, month: 7 }, // July 2025
                endDate: { year: 2025, month: 9 },   // September 2025
                completed: false, 
                description: 'Complete gunnery animations for Humvee vehicles.' 
            },
            { 
                id: 26, 
                memberIds: [9], 
                name: 'Both vehicles rigged and playable in-game', 
                startDate: { year: 2025, month: 10 }, // July 2025
                endDate: { year: 2025, month: 11 },   // September 2025
                completed: false, 
                description: 'Ensure both Technical and Humvee vehicles are fully rigged and playable with completed animations.' 
            },
            { 
                id: 5, 
                memberIds: [9], 
                name: '3P Bipod/Misc Animation Improvements', 
                startDate: { year: 2025, month: 10 }, 
                endDate: { year: 2025, month: 11 }, 
                completed: false, 
                description: 'Additional improvements for third person bipods and stuff.' 
            },
            { 
            id: 85, 
            memberIds: [9], 
            name: 'Crouch & Prone Stance Transitions', 
            startDate: { year: 2025, month: 10 }, 
            endDate: { year: 2025, month: 11 }, 
            completed: false, 
            description: 'Additional improvements for third person bipods and stuff.' 
            },
            // Campaign Levels Team
            { 
                id: 6, 
                memberIds: [4, 3, 5], 
                name: 'Campaign Levels Development', 
                startDate: { year: 2025, month: 5 }, 
                endDate: { year: 2025, month: 8 }, 
                completed: false, 
                description: 'Complete development of campaign levels.' 
            },
            {
                id: 7,
                memberIds: [11, 12], // Francisco and Abdeel
                name: 'AI Transport Vehicle System',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 7 },   // July 2025
                completed: false,
                description: 'Develop complete AI system for utilizing and operating transport vehicles.'
            },
            {
                id: 8,
                memberIds: [15, 2], // Yoshi, PookyThePolak
                name: 'Implement "Hold Breath" & "Slight Zoom" Functionality While ADS',
                startDate: { year: 2025, month: 9 }, // September 2025
                endDate: { year: 2025, month: 11 },   // November 2025
                completed: false,
                description: 'Add hold breath and slight zoom functionality while aiming down sights.'
            },
            {
                id: 9,
                memberIds: [15, 2, 1], // Yoshi, PookyThePolak, SRDDonkey
                name: 'Implement Radio Filters for VOIP',
                startDate: { year: 2025, month: 10 },
                endDate: { year: 2025, month: 11 },
                completed: false,
                description: 'Add radio filter effects for VOIP communication.'
            },
            {
                id: 10,
                memberIds: [1], // SRDDonkey
                name: 'Fix Auto-Balance Team Switching', 
                startDate: { year: 2025, month: 8 }, // August 2025
                endDate: { year: 2025, month: 10 },   // October 2025
                completed: false, 
                description: 'Stop auto-balance from killing players while they are alive to teamswitch them.'
            },
            {
                id: 11,
                memberIds: [13, 1], // Pizzaman, SRDDonkey
                name: 'Add Spread Projectiles System',
                startDate: { year: 2025, month: 7 },
                endDate: { year: 2025, month: 9 },
                completed: false,
                description: 'Implement spread projectiles system to support weapons like shotguns.'
            },
            {
                id: 12,
                memberIds: [13, 1], // Pizzaman, SRDDonkey
                name: 'Implement Vehicle Kit Restrictions',
                startDate: { year: 2025, month: 7 },
                endDate: { year: 2025, month: 9 },
                completed: false,
                description: 'Add kit restrictions for vehicle access.'
            },
            {
                id: 13,
                memberIds: [13, 3], // Pizzaman, Bluedrake42
                name: 'Implement Kit Request and Rearm System', 
                startDate: { year: 2025, month: 8 }, // August 2025
                endDate: { year: 2025, month: 10 },   // October 2025
                completed: false, 
                description: 'Implement requesting kits & rearming from ammo crates using the radial system.' 
            },
            {
                id: 14,
                memberIds: [13, 15], // Pizzaman, Yoshi
                name: 'Implement Squad Vehicle Claiming', 
                startDate: { year: 2025, month: 8 }, // August 2025
                endDate: { year: 2025, month: 10 },   // October 2025
                completed: false, 
                description: 'Add system for squads to claim vehicles.' 
            },
            {
                id: 15,
                memberIds: [4, 13], // WarriorJ, Pizzaman
                name: 'Implement Squad Platoon Equipment Kits',
                startDate: { year: 2025, month: 7 }, // July 2025
                endDate: { year: 2025, month: 8 },   // August 2025
                completed: false,
                description: 'Add squad platoon equipment kit system.'
            },
            {
                id: 19,
                memberIds: [2, 4, 3], // PookyThePolak, WarriorJ, Bluedrake42
                name: 'Add Steam Achievements',
                startDate: { year: 2025, month: 9 }, // September 2025
                endDate: { year: 2025, month: 11 },   // November 2025
                completed: false,
                description: 'Implement in-game Steam achievements system.'
            },
            {
                id: 20,
                memberIds: [1], // SRDDonkey
                name: 'Implement Moddable Localization System', 
                startDate: { year: 2025, month: 9 }, // September 2025
                endDate: { year: 2025, month: 11 },   // November 2025
                completed: false, 
                description: 'Add support for moddable localization system.' 
            },
            {
                id: 21,
                memberIds: [15, 14, 2], // Yoshi, MrPonchovie, PookyThePolak
                name: 'Implement Constructible Armed Emplacements', 
                startDate: { year: 2025, month: 8 }, // August 2025
                endDate: { year: 2025, month: 10 },   // October 2025
                completed: false, 
                description: 'Add system for constructing and operating armed emplacements.' 
            },
            {
                id: 22,
                memberIds: [1],
                name: 'Projectile Networking Synchronization', 
                startDate: { year: 2025, month: 8 }, // August 2025
                endDate: { year: 2025, month: 11 },  // November 2025
                completed: false, 
                description: 'Improve projectile networking sync, including fixing frag grenade issues.' 
            },
            {
                id: 27,
                memberIds: [3], // Bluedrake42
                name: 'UI Changes Design Document for PerpIDK',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 5 },   // May 2025
                completed: false,
                description: 'Create comprehensive design document detailing all remaining UI changes for Operation: Harsh Doorstop to be handed off to PerpIDK (new team member).'
            },
            {
                id: 28,
                memberIds: [18], // PerpIDK
                name: 'Implement Full UI Changes for Operation: Harsh Doorstop',
                startDate: { year: 2025, month: 6 }, // June 2025
                endDate: { year: 2025, month: 8 },   // August 2025
                completed: false,
                description: 'Complete implementation of all UI changes for Operation: Harsh Doorstop based on the design document, including final refinements and integration.'
            },
            {
                id: 29,
                memberIds: [9], // MikeNike
                name: 'True First-Person Perspective Prototype', 
                startDate: { year: 2025, month: 10 }, // October 2025
                endDate: { year: 2025, month: 10 },   // October 2025
                completed: false, 
                description: 'Develop and prototype a true first-person perspective system with enhanced immersion and realistic player view mechanics.' 
            },
            { 
                id: 30, 
                memberIds: [9], // MikeNike
                name: 'Third-Person Controller System Mockup', 
                startDate: { year: 2025, month: 10 }, // October 2025
                endDate: { year: 2025, month: 10 },   // October 2025
                completed: false, 
                description: 'Develop and create a comprehensive mockup for a third-person controller system, focusing on movement, camera mechanics, and player interaction.' 
            },
            { 
                id: 31,
                memberIds: [1], // SRDDonkey
                name: 'Abandoned Vehicle Respawning System', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false, 
                description: 'Develop and implement a system for respawning abandoned vehicles in the game world.' 
            },
            { 
                id: 32, 
                memberIds: [15], // Yoshi
                name: 'Humvee Vehicle Full Playability', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false, 
                description: 'Complete full implementation and playability of Humvee vehicle, including all core mechanics and interactions.' 
            },
            { 
                id: 33, 
                memberIds: [15], // Yoshi
                name: 'Technical Vehicle Full Playability', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false, 
                description: 'Complete full implementation and playability of Technical vehicle, including all core mechanics and interactions.' 
            },
            { 
                id: 34,
                memberIds: [3], // Bluedrake42
                name: 'Platoon Mechanics Design Document', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false, 
                description: 'Create comprehensive design document detailing the full mechanics, interactions, and implementation of platoon systems in Operation: Harsh Doorstop.' 
            },
            {
                id: 35,
                memberIds: [13, 1], // Pizzaman, SRDDonkey
                name: 'Radial System for Construction and Kit Requesting', 
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false, 
                description: 'Develop comprehensive radial system for construction and kit requesting from ammo crates, ensuring intuitive and efficient player interactions.' 
            }
        ],
        deadlines: [
            {
                date: { year: 2025, month: 12 },
                name: "Full Release (Operation: Harsh Doorstop)",
                description: "Full release out of early access for Operation: Harsh Doorstop on Steam."
            },
            {
                date: { year: 2026, month: 2 },
                name: "Follow-Up Update (Operation: Harsh Doorstop)",
                description: "Follow-up update for Operation: Harsh Doorstop on Steam to fix any outlying issues post-release."
            }
        ]
    },
    {
        id: 2,
        name: "Isolation Sequence",
        tasks: [
            {
                id: 1,
                memberIds: [8], // Assassin
                name: 'New Playable Build Development',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 7 },   // July 2025
                completed: false,
                description: 'Develop and deliver a new fully playable build of the game.'
            },
            {
                id: 2,
                memberIds: [6], // Putridi
                name: 'Lobby Screen Levels Implementation',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false,
                description: 'Complete development of all lobby screen levels.'
            },
            {
                id: 3,
                memberIds: [6, 7], // Putridi and Kartona
                name: 'Test Mission Blockouts',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 7 },   // July 2025
                completed: false,
                description: 'Create three test mission blockouts for gameplay testing.'
            },
            {
                id: 4,
                memberIds: [6, 7], // Putridi and Kartona
                name: 'Full Playable Level Development',
                startDate: { year: 2025, month: 7 }, // July 2025
                endDate: { year: 2025, month: 9 },   // September 2025
                completed: false,
                description: 'Develop one complete, fully playable level with all features implemented.'
            },
            {
                id: 5,
                memberIds: [3], // Bluedrake42
                name: 'Game Design Document & Extraction System',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 5 },   // May 2025
                completed: false,
                description: 'Create comprehensive GDD including detailed explanation of the entire extraction system mechanics and gameplay loop.'
            },
            {
                id: 6,
                memberIds: [3], // Bluedrake42
                name: 'UI Design and Blockouts',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false,
                description: 'Complete all UI blockouts and graphic designs including menus, HUD, and in-game interface elements.'
            },
            {
                id: 7,
                memberIds: [2], // PookyThePolak
                name: 'Weapon System Implementation',
                startDate: { year: 2025, month: 6 }, // June 2025
                endDate: { year: 2025, month: 8 },   // August 2025
                completed: false,
                description: 'Import and implement all weapons based on new design document specifications.'
            }
        ],
        deadlines: [
            {
                date: { year: 2025, month: 6 }, // June 2025
                name: "Playtest Milestone (Isolation Sequence)",
                description: "Playtest milestone for Isolation Sequence."
            },
            {
                date: { year: 2025, month: 10 },
                name: "Steam Next Fest (Isolation Sequence)",
                description: "Steam Next Fest for Isolation Sequence on Steam."
            },
            {
                date: { year: 2025, month: 12 },
                name: "Early Access Release (Isolation Sequence)",
                description: "Release into early access for Isolation Sequence on Steam."
            },
            {
                date: { year: 2026, month: 12 },
                name: "Full Release (Isolation Sequence)",
                description: "Full release for Isolation Sequence on Steam."
            }
        ]
    },
    {
        id: 3,
        name: "RevoltAI",
        tasks: [
            {
                id: 1, // First task in this project
                memberIds: [17], // SpicyMelon
                name: 'Store Page & App Setup for RevoltAI',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 5 },   // May 2025
                completed: false,
                description: 'Prepare and finalize store pages and application setups for RevoltAI release.'
            },
            {
                id: 2, // Next Task ID
                memberIds: [3], // Bluedrake42
                name: 'Announce and Begin Selling RevoltAI',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false,
                description: 'Coordinate marketing efforts, announce RevoltAI, and ensure sales channels are active.'
            }
        ],
        deadlines: [
            {
                date: { year: 2025, month: 6 }, // June 2025
                name: "Itch.io Launch (RevoltAI)",
                description: "Launch RevoltAI on Itch.io."
            }
        ]
    },
    {
        id: 4,
        name: "Onyx Game Creator",
        tasks: [
            {
                id: 1, // First task in this project
                memberIds: [17], // SpicyMelon
                name: 'Store Page & App Setup for Onyx Game Creator',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 5 },   // May 2025
                completed: false,
                description: 'Prepare and finalize store pages and application setups for Onyx Game Creator release.'
            },
            {
                id: 2, // Next Task ID
                memberIds: [3], // Bluedrake42
                name: 'Announce and Begin Selling Onyx Game Creator',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false,
                description: 'Coordinate marketing efforts, announce Onyx Game Creator, and ensure sales channels are active.'
            },
            {
                id: 3, // Next Task ID
                memberIds: [17, 3], // SpicyMelon and Bluedrake42
                name: 'Template Downloading & Updating Solution',
                startDate: { year: 2025, month: 5 }, // May 2025
                endDate: { year: 2025, month: 6 },   // June 2025
                completed: false,
                description: 'Design and implement a system for users to download and update game templates within Onyx Game Creator.'
            }
        ],
        deadlines: [
            {
                date: { year: 2025, month: 6 }, // June 2025
                name: "Itch.io Launch (Onyx Game Creator)",
                description: "Launch Onyx Game Creator on Itch.io."
            }
        ]
    },
    {
        id: 5,
        name: "Project Ascension",
        tasks: [
            // May 2025 Completions
            { id: 16, memberIds: [3], name: 'Complete: Student Orientation', startDate: { year: 2025, month: 5 }, endDate: { year: 2025, month: 5 }, completed: false, description: 'Complete course: Student Orientation' },
            { id: 4, memberIds: [3], name: 'Complete: Learn Vibe Coding', startDate: { year: 2025, month: 5 }, endDate: { year: 2025, month: 5 }, completed: false, description: 'Complete course: Learn Vibe Coding' },
            { id: 5, memberIds: [3], name: 'Complete: Sell Games on Steam', startDate: { year: 2025, month: 5 }, endDate: { year: 2025, month: 5 }, completed: false, description: 'Complete course: Sell Games on Steam' },

            // June 2025 Completions
            { id: 14, memberIds: [3], name: 'Complete: Learn R Programming', startDate: { year: 2025, month: 5 }, endDate: { year: 2025, month: 6 }, completed: false, description: 'Complete course: Learn R Programming' },
            { id: 13, memberIds: [3], name: 'Complete: Learn SQL Database Management', startDate: { year: 2025, month: 6 }, endDate: { year: 2025, month: 6 }, completed: false, description: 'Complete course: Learn SQL Database Management' },
            { id: 6, memberIds: [3], name: 'Complete: Sell Games on the Apple App Store', startDate: { year: 2025, month: 6 }, endDate: { year: 2025, month: 6 }, completed: false, description: 'Complete course: Sell Games on the Apple App Store' },

            // July 2025 Completions
            { id: 1, memberIds: [3], name: 'Complete: Build & Sell Applications Using Python & Visual Studio Code', startDate: { year: 2025, month: 6 }, endDate: { year: 2025, month: 7 }, completed: false, description: 'Complete course: Build & Sell Applications Using Python & Visual Studio Code' },
            { id: 9, memberIds: [3], name: 'Complete: Sell Assets & Software on Gumroad', startDate: { year: 2025, month: 7 }, endDate: { year: 2025, month: 7 }, completed: false, description: 'Complete course: Sell Assets & Software on Gumroad' },
            { id: 2, memberIds: [3], name: 'Complete: Create & Sell Games Using Javascript & Cursor', startDate: { year: 2025, month: 7 }, endDate: { year: 2025, month: 7 }, completed: false, description: 'Complete course: Create & Sell Games Using Javascript & Cursor' },

            // August 2025 Completions
            { id: 3, memberIds: [3], name: 'Complete: Build & Sell Websites Using HTML & Digital Ocean', startDate: { year: 2025, month: 7 }, endDate: { year: 2025, month: 8 }, completed: false, description: 'Complete course: Build & Sell Websites Using HTML & Digital Ocean' },
            { id: 7, memberIds: [3], name: 'Complete: Automate & Monetize a Youtube Channel', startDate: { year: 2025, month: 8 }, endDate: { year: 2025, month: 8 }, completed: false, description: 'Complete course: Automate & Monetize a Youtube Channel' },
            { id: 12, memberIds: [3], name: 'Complete: Learn Deep Statistical Analysis', startDate: { year: 2025, month: 8 }, endDate: { year: 2025, month: 8 }, completed: false, description: 'Complete course: Learn Deep Statistical Analysis' },

            // September 2025 Completions
            { id: 15, memberIds: [3], name: 'Complete: Build Machine Learning Algorithms', startDate: { year: 2025, month: 8 }, endDate: { year: 2025, month: 9 }, completed: false, description: 'Complete course: Build Machine Learning Algorithms' },
            { id: 8, memberIds: [3], name: 'Complete: Build Your Own AI Assistant', startDate: { year: 2025, month: 9 }, endDate: { year: 2025, month: 9 }, completed: false, description: 'Complete course: Build Your Own AI Assistant' },

            // October 2025 Completions
            { id: 10, memberIds: [3], name: 'Complete: Create Stock & Crypto Trading Bots Using TensorFlow & Alpaca', startDate: { year: 2025, month: 9 }, endDate: { year: 2025, month: 10 }, completed: false, description: 'Complete course: Create Stock & Crypto Trading Bots Using TensorFlow & Alpaca' },
            { id: 11, memberIds: [3], name: 'Complete: Create & Sell Games Using Onyx Game Creator', startDate: { year: 2025, month: 10 }, endDate: { year: 2025, month: 10 }, completed: false, description: 'Complete course: Create & Sell Games Using Onyx Game Creator' }
        ],
        deadlines: []
    }
    // Add more projects here if needed
]; 