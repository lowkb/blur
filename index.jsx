
const links = [
  { href: 'https://github.com/lowkb', label: 'GitHub' },
  { href: 'https://discord.com/users/123456789', label: 'Discord' },
  { href: 'https://instagram.com/lowkb', label: 'Instagram' }
];


import { h, render } from 'preact';
import Layout from './src/layouts/Layout.jsx';
import Profile from './src/components/Profile.jsx';
import './src/assets/styles/style.css';

render(
  <Layout>
    <Profile />
  </Layout>,
  document.getElementById('root')
);
