import Tailwind from '@astrojs/tailwind';
import Compress from "astro-compress";

export default {
  integrations: [Tailwind(), Compress()]
};
