# tampermonkey-scripts

个人常用 tampermonkey 脚本。

## 解除 CSP 策略限制

由于浏览器的内容安全策略（Content Security Policy，CSP）存在，导致使用该策略的站点无法使用油猴脚本，目前仅 safari 无法被脚本扩展自动绕过。  
可以通过代理软件修改响应头解除 CSP 限制。
例如使用 QuantumultX 的重写规则解除 GitHub 限制。
```
^https?://github\.com($|/.*) url response-header (\r\n)Content-Security-Policy:.+(\r\n) response-header $1Content-Security-Policy:$2
```

