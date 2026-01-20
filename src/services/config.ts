// 配置服务 - 封装 Electron Store
import { config } from './ipc'

// 配置键名
export const CONFIG_KEYS = {
  DECRYPT_KEY: 'decryptKey',
  DB_PATH: 'dbPath',
  MY_WXID: 'myWxid',
  THEME: 'theme',
  LAST_SESSION: 'lastSession',
  WINDOW_BOUNDS: 'windowBounds',
  IMAGE_XOR_KEY: 'imageXorKey',
  IMAGE_AES_KEY: 'imageAesKey',
  CACHE_PATH: 'cachePath',
  EXPORT_PATH: 'exportPath',
  AGREEMENT_VERSION: 'agreementVersion',
  STT_LANGUAGES: 'sttLanguages',
  STT_MODEL_TYPE: 'sttModelType',
  QUOTE_STYLE: 'quoteStyle',
  SKIP_INTEGRITY_CHECK: 'skipIntegrityCheck'
} as const

// 当前协议版本 - 更新协议内容时递增此版本号
export const CURRENT_AGREEMENT_VERSION = 1

// 获取解密密钥
export async function getDecryptKey(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.DECRYPT_KEY)
  return value as string | null
}

// 设置解密密钥
export async function setDecryptKey(key: string): Promise<void> {
  await config.set(CONFIG_KEYS.DECRYPT_KEY, key)
}

// 获取数据库路径
export async function getDbPath(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.DB_PATH)
  return value as string | null
}

// 设置数据库路径
export async function setDbPath(path: string): Promise<void> {
  await config.set(CONFIG_KEYS.DB_PATH, path)
}

// 获取当前用户 wxid
export async function getMyWxid(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.MY_WXID)
  return value as string | null
}

// 设置当前用户 wxid
export async function setMyWxid(wxid: string): Promise<void> {
  await config.set(CONFIG_KEYS.MY_WXID, wxid)
}

// 获取主题
export async function getTheme(): Promise<'light' | 'dark'> {
  const value = await config.get(CONFIG_KEYS.THEME)
  return (value as 'light' | 'dark') || 'light'
}

// 设置主题
export async function setTheme(theme: 'light' | 'dark'): Promise<void> {
  await config.set(CONFIG_KEYS.THEME, theme)
}

// 获取上次打开的会话
export async function getLastSession(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.LAST_SESSION)
  return value as string | null
}

// 设置上次打开的会话
export async function setLastSession(sessionId: string): Promise<void> {
  await config.set(CONFIG_KEYS.LAST_SESSION, sessionId)
}


// 获取图片 XOR 密钥
export async function getImageXorKey(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.IMAGE_XOR_KEY)
  return value as string | null
}

// 设置图片 XOR 密钥
export async function setImageXorKey(key: string): Promise<void> {
  await config.set(CONFIG_KEYS.IMAGE_XOR_KEY, key)
}

// 获取图片 AES 密钥
export async function getImageAesKey(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.IMAGE_AES_KEY)
  return value as string | null
}

// 设置图片 AES 密钥
export async function setImageAesKey(key: string): Promise<void> {
  await config.set(CONFIG_KEYS.IMAGE_AES_KEY, key)
}

// 获取缓存路径
export async function getCachePath(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.CACHE_PATH)
  return value as string | null
}

// 设置缓存路径
export async function setCachePath(path: string): Promise<void> {
  await config.set(CONFIG_KEYS.CACHE_PATH, path)
}


// 获取导出路径
export async function getExportPath(): Promise<string | null> {
  const value = await config.get(CONFIG_KEYS.EXPORT_PATH)
  return value as string | null
}

// 设置导出路径
export async function setExportPath(path: string): Promise<void> {
  await config.set(CONFIG_KEYS.EXPORT_PATH, path)
}


// 获取 STT 支持语言
export async function getSttLanguages(): Promise<string[]> {
  const value = await config.get(CONFIG_KEYS.STT_LANGUAGES)
  return (value as string[]) || []
}

// 设置 STT 支持语言
export async function setSttLanguages(languages: string[]): Promise<void> {
  await config.set(CONFIG_KEYS.STT_LANGUAGES, languages)
}

// 获取 STT 模型类型
export async function getSttModelType(): Promise<'int8' | 'float32'> {
  const value = await config.get(CONFIG_KEYS.STT_MODEL_TYPE)
  return (value as 'int8' | 'float32') || 'int8'
}

// 设置 STT 模型类型
export async function setSttModelType(type: 'int8' | 'float32'): Promise<void> {
  await config.set(CONFIG_KEYS.STT_MODEL_TYPE, type)
}


// 获取用户同意的协议版本
export async function getAgreementVersion(): Promise<number> {
  const value = await config.get(CONFIG_KEYS.AGREEMENT_VERSION)
  return (value as number) || 0
}

// 设置用户同意的协议版本
export async function setAgreementVersion(version: number): Promise<void> {
  await config.set(CONFIG_KEYS.AGREEMENT_VERSION, version)
}

// 检查是否需要显示协议（版本不匹配时需要重新同意）
export async function needShowAgreement(): Promise<boolean> {
  const agreedVersion = await getAgreementVersion()
  return agreedVersion < CURRENT_AGREEMENT_VERSION
}

// 标记用户已同意当前版本协议
export async function acceptCurrentAgreement(): Promise<void> {
  await setAgreementVersion(CURRENT_AGREEMENT_VERSION)
}

// 获取引用样式
export async function getQuoteStyle(): Promise<'default' | 'wechat'> {
  const value = await config.get(CONFIG_KEYS.QUOTE_STYLE)
  return (value as 'default' | 'wechat') || 'default'
}

// 设置引用样式
export async function setQuoteStyle(style: 'default' | 'wechat'): Promise<void> {
  await config.set(CONFIG_KEYS.QUOTE_STYLE, style)
}

// 获取是否跳过完整性检查
export async function getSkipIntegrityCheck(): Promise<boolean> {
  const value = await config.get(CONFIG_KEYS.SKIP_INTEGRITY_CHECK)
  return (value as boolean) || false
}

// 设置是否跳过完整性检查
export async function setSkipIntegrityCheck(skip: boolean): Promise<void> {
  await config.set(CONFIG_KEYS.SKIP_INTEGRITY_CHECK, skip)
}
