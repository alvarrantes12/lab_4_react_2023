import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Edit',
    path: '/edit',
    icon: <AiIcons.AiFillBook />,
    cName: 'nav-text'
  },
  {
    title: 'New',
    path: '/new',
    icon: <AiIcons.AiFillCloud />,
    cName: 'nav-text'
  },
  {
    title: 'Delete',
    path: '/delete',
    icon: <AiIcons.AiFillAlert />,
    cName: 'nav-text'
  }
];