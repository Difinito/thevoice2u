import { JwtModuleAsyncOptions } from '@nestjs/jwt';

import appConfig from './app.config';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: appConfig().appSecret,
      signOptions: { expiresIn: '1d' },
    };
  },
};

export const RtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: appConfig().rtSecret,
      signOptions: { expiresIn: 60 * 60 * 24 * 7 },
    };
  },
};
