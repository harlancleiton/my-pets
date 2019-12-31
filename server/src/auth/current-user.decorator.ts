import { createParamDecorator } from '@nestjs/common';

import { User } from 'src/users/user.entity';

export const CurrentUser = createParamDecorator(async (data, req) => {
  console.log(req.user);
  if (req.user) {
    return await User.findOne({ id: req.user.uid });
  } else {
    return null;
  }
});
