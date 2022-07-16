# 登录

## Request

`POST /login`

### body param

```json
{
    "email": "hzy@qq.com",
    "pass": "pass123"
}
```

## Response

### 登录成功

`200`

```json
{
    "token": "123"
}
```

### 邮箱不存在

`404`

```json
{
    "type": "email"
}
```

### 密码错误

`404`

```json
{
    "type": "pass"
}
```