import { prepServer } from "$server";

const bootstrap = async () => {
  const app = await prepServer();
  await app.listen(3000);
};

void bootstrap();
