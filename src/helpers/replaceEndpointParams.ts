export default function replaceEndpointParams(
  endpoint: string,
  params: Array<{ key: string; value: string | undefined }>
): string {
  if (params.some((t) => !t.value)) {
    throw new Error("Some of endpoint params is undefined");
  }

  let result = endpoint;

  params.forEach((param) => {
    result = result.replace(":" + param.key, param.value!);
  });

  return result;
}
