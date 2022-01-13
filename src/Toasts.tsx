import React from 'react';
import { toast } from 'react-toastify';

export const openToast = (type: 'success' | 'error' | 'warn' | 'info', msg: string) => toast[type](msg);