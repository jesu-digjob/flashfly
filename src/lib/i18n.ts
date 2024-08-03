// "en-IL" <-- makes this file easier to find.
import { i18n } from "@lingui/core";
import { en, he, ja } from "make-plural/plurals";
import { messages as enUsMessages } from "../../locales/en-US/messages";
import { messages as heIlMessages } from "../../locales/he-IL/messages";
import { messages as jaJPMessages } from "../../locales/ja-JP/messages";

import { I18nProvider } from "@lingui/react";

// TODO, dynamic imports for additional languages.
// But just Heb+Eng is fine to load statically.

i18n.loadLocaleData({
  "en-US": { plurals: en },
  "he-IL": { plurals: he },
  "ja-JP": { plurals: ja },
  // pseudo: { plurals: en },
});

i18n.load({
  "en-US": enUsMessages,
  "he-IL": heIlMessages,
  "ja-JP": jaJPMessages,
});

export { i18n, I18nProvider };
