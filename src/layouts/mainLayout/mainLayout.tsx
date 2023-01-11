import React, { ReactNode, useState } from 'react';
import {
  ActionIcon,
  Anchor,
  AppShell,
  Avatar,
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  Header,
  MediaQuery,
  Menu,
  Navbar,
  Space,
  Stack,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useStyles } from './mainLayout.styles';
import { colors } from '../../constants/colors';
import { IconSun, IconMoonStars } from '@tabler/icons';

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { classes } = useStyles();
  const router = useRouter();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      navbarOffsetBreakpoint="md"
      fixed
      header={
        <Header height={80} className={`${classes.headerBackground}`} withBorder={false}>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <div className={classes.burger}>
              <Anchor href="/" ml="xl">
                <Image
                  src='/logo.svg'
                  width={110}
                  height={70}
                  alt='logo'

                />
              </Anchor>
              <div>
                <ActionIcon
                 variant="outline"
                 color={dark ? 'yellow' : 'gray'}
                 onClick={() => toggleColorScheme()}
                 title={dark ? 'Light Mode' : 'Dark Mode'}
                >
                  {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>
              </div>
              <div style={{marginRight: 20}}>
                <Anchor className={`${classes.navitem} ${classes.resume}`} href="/resume.pdf" target="_blank">Resume</Anchor>
              </div>
            </div>
          </MediaQuery>
          <div className={classes.header}>
            <div className={classes.logo}>
              <Anchor href="/">
                <Image
                  src='/logo.svg'
                  width={150}
                  height={100}
                  alt='logo'
                />

              </Anchor>
            </div>
            <div className={classes.themeButton}>
              <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'gray'}
                onClick={() => toggleColorScheme()}
                title={dark ? 'Light Mode' : 'Dark Mode'}
              >
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </ActionIcon>
            </div>
            <div className={classes.links} style={{ margin: "0 45px" }}>
              <div>
                <Anchor className={`${classes.navitem} ${classes.resume}`} href="/resume.pdf" target="_blank">Resume</Anchor>
              </div>
            </div>
          </div>
        </Header >}
    >
      {children}
    </AppShell >
  );
}

export default MainLayout;
