import cronTasks from "./cron-tasks";

export default ({ env }) => {
  console.log("Strapi cron enabled:", true);
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    cron: { enabled: true,tasks:cronTasks },
  };
};
