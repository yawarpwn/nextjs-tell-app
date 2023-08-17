// Simulated user data
const users = [
  {
    id: 1,
    name: "Coroporacion el Marvi S.A.",
    email: "20610555536",
    role: "developer",
    team: "Frontend",
    status: "active",
    avatar: "https://via.placeholder.com/40",
    age: 30,
  },
  {
    id: 2,
    name: "Tell Senales Sociedad Anonima Cerrada",
    email: "20610555536",
    role: "designer",
    team: "UI/UX",
    status: "paused",
    avatar: "https://via.placeholder.com/40",
    age: 28,
  },
  // ... Add more user objects as needed
];

// Simulated column data
const columns = [
  { uid: "name", name: "Name", sortable: true },
  { uid: "role", name: "Role", sortable: true },
  { uid: "status", name: "Status", sortable: false },
  { uid: "actions", name: "Actions", sortable: false },
  // ... Add more column objects as needed
];

// Simulated status options
const statusOptions = [
  { uid: "active", name: "Active" },
  { uid: "paused", name: "Paused" },
  { uid: "vacation", name: "Vacation" },
  // ... Add more status option objects as needed
];

export { users, columns, statusOptions };

