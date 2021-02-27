export const handler = async (): Promise<any> => {
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from aws-chat-randy to test github AWS Lambda Function!'),
    };
    return response;
  };
