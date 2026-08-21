/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSUBMIT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
