const BASE_URL = `/api`;

const formatUrl = (url: string) => {
  return url.includes('http') ? url : `${BASE_URL}${url}`;
};

const generateHeaders = async (headers: any) => {
  const options: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };

  return options;
};

type RequestSuccessResult<T> = {
  status: true;
  message?: string;
  data: T;
  path: string;
  statusCode: number;
};

type RequestErrorResult<T> = {
  status: false;
  statusCode: number;
  path: string;
  message: string;
  timestamp: string;
  data: T;
  stack: string;
};

type ApiResponse<T> = RequestSuccessResult<T> | RequestErrorResult<T>;

const fetchReq = async <T>(
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT',
  path: string,
  body: any,
  headers?: any
): Promise<ApiResponse<T | any>> => {
  try {
    const headerOptions = await generateHeaders(headers);
    const response = await fetch(formatUrl(path), {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: headerOptions,
    });

    const statusCode = response.status;
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Unknown error');
    }

    return {
      status: true,
      data: responseData.data || responseData,
      path,
      statusCode,
      message: responseData.message,
    } as RequestSuccessResult<T | any>;
  } catch (error: any) {
    return {
      status: false,
      message: error.message || 'Failed to fetch data',
      statusCode: error.statusCode || 500,
      path,
      timestamp: new Date().toISOString(),
      data: error.data || {},
      stack: error.stack || '',
    } as RequestErrorResult<any>;
  }
};

export const request = {
  get: async <T>(path: string, headers?: any) => {
    return fetchReq<T>('GET', path, null, headers);
  },
  post: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('POST', path, body, headers);
  },
  put: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('PUT', path, body, headers);
  },
  patch: async <T>(path: string, body?: any, headers?: any) => {
    return fetchReq<T>('PATCH', path, body, headers);
  },
  delete: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('DELETE', path, body, headers);
  },
};
