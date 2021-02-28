export const handler = async (): Promise<any> => {
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from the new awc-gh-lambda-policy to test github AWS Lambda Function!'),
    };
    return response;
  };
