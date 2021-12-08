# decorator-cached-request

The CachedRequest decorator is used to cache requests to the server.

## Example

```typescript
  @CachedRequest(function () { return this.cache})
  getClients(): Observable<any> {
    return this.httpClient.get(`${API_PATH}/users`);
  }
```
