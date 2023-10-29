'use client';
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar, Button,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import {useConvexAuth} from "convex/react";
import {SignInButton} from "@clerk/clerk-react";

export const NavigationBar = () => {
  const currentPath = usePathname();
  const {isAuthenticated, isLoading} = useConvexAuth()
  const links = [
    {
      id: 0,
      to: '/dashboard',
      name: 'dashboard',
    },
    {
      id: 1,
      to: '/issues',
      name: 'issues',
    },
  ];
  return (
    <Navbar isBordered isBlurred>
      <NavbarBrand>
        <Link color="foreground" href="/" className="font-bold text-inherit">
          Home
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.id} isActive={link.to === currentPath}>
            <Link color="foreground" href={link.to}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        {!isAuthenticated && !isLoading && (<SignInButton>
          <Button variant='ghost'>
          Sign in
          </Button>
        </SignInButton>)}
        {isAuthenticated &&
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        }
      </NavbarContent>
    </Navbar>
  );
};
