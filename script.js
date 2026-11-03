function executeUserCode(userInput) {
  const HANDLERS = {
    user: handleUser,
    admin: handleAdmin,
};

function run(role) {
    const handler = HANDLERS[role];
    if (!handler) {
        throw new Error(`Unknown role: ${role}`);
    }
    handler();
}
}

const ADMIN_TOKEN = "Bearer secret_jwt_token_123456";
