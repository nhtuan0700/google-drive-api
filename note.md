# Server to Server

https://developers.google.com/identity/protocols/oauth2/service-account

1. Create Service Account
2. Create service account key
- Get JSON information 
```json
{
  "type": "service_account",
  "project_id": "emerald-ivy-387607",
  "private_key_id": "4b3e9660d07da13e98f9241a6a5bece4263b9556",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuVQeG/4rkY1lI\nJchSf6R6suoEXEdUG+KY+IMKl3HRUrY5sSNGKwtyh4i2Q9ulLKJHINXj8WQjrb9V\ngCjHoqZibsXL7ggKWVCsOcfDuitZgj7yhALbxSV/h+IuKeqV43d8tIg3M9bjtDLf\ngd1sqfAPM/S5XJtmLBo+kONYTNtINgs+UifWnwZOpfIQk0ZyCNL2dpzFohVEfRPV\ngqhCfjO31VAlSZIwzjYLzxwh7izd1yAsp8DjSPEYPl2yWDoc2l17K+LFYi0Z/n02\nWY/HNqtCLv+AaNENookb72a9D1jr2PgKc0m2e01SYCuCZ4H9mBR1pn0M87iHkya/\nGzr1L5lHAgMBAAECggEAHojoK54g3sYEAl4Ty1duIMurr53WJIZJ109X7IgAOJDL\nOCmtqwGpHKNer8YM985skhbPQACs8I7jP3+WJPl5OS572K9VmzJvrerk8YRvSVtF\n2UaEFahfXAoZ9MoEu8I+0InyffDHh9StQHbHqNvPH2qTR9BPq8K3yhOornOvyOLb\nt892FcC58XudBiEaMgSYd3oomYy6BLI+73T5uDzBSch+ZJssbWQNLkszgQPk2wZn\n/OuVPjzr/flJD9Euuqep6uroBPdfdKecL/jQZIi202VDATUlgcMAheRwPhPtZTna\nkLMWnAf4wC2zEorqaOPbEK2e+xCxmqE4RI2/KhvaUQKBgQDypllaYHv77YNw3fSx\np37Fo7vS8Tpj1NtN4QcFc6VdXocUCYoni/FMKDzxBUmUEp+do74d9mHxcAa1eEEx\nJ0Qk0FYLwK+UEIlopTIhzPV52xZoHp3T6SjOll306XkyxSYfv3Gb5He+nhfzcJe6\noZOTHlwaoBpE0Q/42jZreuChqQKBgQC37HJCaAB613oYEuGoPEg0+UlLOuVZlKWM\n6gaGv3LGAxeuYSjybQJSrSs6j+ODNSp2kunPqpiUxJQvh0U1nFlvzmNSmCWkbrSC\ndM8EmEJShKTK42JVdXaqvA1ClIk/hubyMfKBy1rlNXFh1caokLXZODs/0fMmm+7P\nHg1tjgAZbwKBgQClXilXJppYvy3tJdc1m+kR2NyQjkY080Pid5HJbV8tmtaEGVxG\nR2FTfbjKqcfTWj3duVJAKUHmwWpREnubfB88159Msyz1w69h2fOohX5mZaGHpBX7\n7dMZt/CgkN1AdIve5yIOFE5nYmcASaOeVa+1e+NZYfOFItW3yz97UGr2wQKBgF6T\nc126ZSTF0L64VtlPxkGXPp00t+MMkOSZIqn/oGE6Dd9Zjti6PUuOSIBgpTk/CYrX\nmOt0ael1/E1EXc5ni4X2txQtsI2Rb7j1n85ZDSGpm6PIsTQIpvC8qoTmJH1KPU+l\nZ3Jew2rBxH/ukaz0XM5KIA19RG9CF9bhOT5wmpR5AoGAMVMLzplBrUaNC2OrV7vO\n2s3vbmCdqvXeg0+PFELhm7it0lmemC6ZNM0h48ZWHRaylby00YHjFgXdoWy6tS2K\nGZwQuPV6b1zGkfCxkChsigPgFcFZEgIByoJhXLu1IK0Kx6Oxz6ojsa88zundIzZE\noBHIaXpsrlxqoOz1MWHe7Mg=\n-----END PRIVATE KEY-----\n",
  "client_email": "dirver-openai-account@emerald-ivy-387607.iam.gserviceaccount.com",
  "client_id": "105910450287111835488",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dirver-openai-account%40emerald-ivy-387607.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```
3. Generate JWT
4. From JWT TOken, then using it to request an access token
```sh
curl -d 'grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=jwt' https://oauth2.googleapis.com/token
```
5. Use access token to using Google API




### Generate JWT
https://jwt.io
```json
// header
{
  "alg": "RS256",
  "typ": "JWT"
}

// Payload
{
  "iss": "dirver-openai-account@emerald-ivy-387607.iam.gserviceaccount.com",
  "scope": "https://www.googleapis.com/auth/prediction",
  "aud": "https://oauth2.googleapis.com/token",
  "exp": 1684916815,
  "iat": 1684915015
}
// exp:  thời gian (seconds) hết hạn sau iat (tối đa 1 giờ)
// iat: thời gian (seconds) token được áp dụng

// Signature
/**
 * public key
 * 4b3e9660d07da13e98f9241a6a5bece4263b9556
 *
 * private key
 * -----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuVQeG/4rkY1lI
JchSf6R6suoEXEdUG+KY+IMKl3HRUrY5sSNGKwtyh4i2Q9ulLKJHINXj8WQjrb9V
gCjHoqZibsXL7ggKWVCsOcfDuitZgj7yhALbxSV/h+IuKeqV43d8tIg3M9bjtDLf
gd1sqfAPM/S5XJtmLBo+kONYTNtINgs+UifWnwZOpfIQk0ZyCNL2dpzFohVEfRPV
gqhCfjO31VAlSZIwzjYLzxwh7izd1yAsp8DjSPEYPl2yWDoc2l17K+LFYi0Z/n02
WY/HNqtCLv+AaNENookb72a9D1jr2PgKc0m2e01SYCuCZ4H9mBR1pn0M87iHkya/
Gzr1L5lHAgMBAAECggEAHojoK54g3sYEAl4Ty1duIMurr53WJIZJ109X7IgAOJDL
OCmtqwGpHKNer8YM985skhbPQACs8I7jP3+WJPl5OS572K9VmzJvrerk8YRvSVtF
2UaEFahfXAoZ9MoEu8I+0InyffDHh9StQHbHqNvPH2qTR9BPq8K3yhOornOvyOLb
t892FcC58XudBiEaMgSYd3oomYy6BLI+73T5uDzBSch+ZJssbWQNLkszgQPk2wZn
/OuVPjzr/flJD9Euuqep6uroBPdfdKecL/jQZIi202VDATUlgcMAheRwPhPtZTna
kLMWnAf4wC2zEorqaOPbEK2e+xCxmqE4RI2/KhvaUQKBgQDypllaYHv77YNw3fSx
p37Fo7vS8Tpj1NtN4QcFc6VdXocUCYoni/FMKDzxBUmUEp+do74d9mHxcAa1eEEx
J0Qk0FYLwK+UEIlopTIhzPV52xZoHp3T6SjOll306XkyxSYfv3Gb5He+nhfzcJe6
oZOTHlwaoBpE0Q/42jZreuChqQKBgQC37HJCaAB613oYEuGoPEg0+UlLOuVZlKWM
6gaGv3LGAxeuYSjybQJSrSs6j+ODNSp2kunPqpiUxJQvh0U1nFlvzmNSmCWkbrSC
dM8EmEJShKTK42JVdXaqvA1ClIk/hubyMfKBy1rlNXFh1caokLXZODs/0fMmm+7P
Hg1tjgAZbwKBgQClXilXJppYvy3tJdc1m+kR2NyQjkY080Pid5HJbV8tmtaEGVxG
R2FTfbjKqcfTWj3duVJAKUHmwWpREnubfB88159Msyz1w69h2fOohX5mZaGHpBX7
7dMZt/CgkN1AdIve5yIOFE5nYmcASaOeVa+1e+NZYfOFItW3yz97UGr2wQKBgF6T
c126ZSTF0L64VtlPxkGXPp00t+MMkOSZIqn/oGE6Dd9Zjti6PUuOSIBgpTk/CYrX
mOt0ael1/E1EXc5ni4X2txQtsI2Rb7j1n85ZDSGpm6PIsTQIpvC8qoTmJH1KPU+l
Z3Jew2rBxH/ukaz0XM5KIA19RG9CF9bhOT5wmpR5AoGAMVMLzplBrUaNC2OrV7vO
2s3vbmCdqvXeg0+PFELhm7it0lmemC6ZNM0h48ZWHRaylby00YHjFgXdoWy6tS2K
GZwQuPV6b1zGkfCxkChsigPgFcFZEgIByoJhXLu1IK0Kx6Oxz6ojsa88zundIzZE
oBHIaXpsrlxqoOz1MWHe7Mg=
-----END PRIVATE KEY-----
 */

```