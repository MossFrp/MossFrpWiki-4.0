import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'MossFrp',
  mode: 'site',
  favicon: 'https://yyang.zengarden.top/img/mossfrp/logo.svg',
  logo: 'https://yyang.zengarden.top/img/mossfrp/logo.png',
  locales: [['zh-CN', '中文']],
  mfsu: {},
  navs: {
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/mossfrp' },
      { title: '官网', path: 'https://mossfrp.top' },
    ],
  },
  // more config: https://d.umijs.org/config
});
