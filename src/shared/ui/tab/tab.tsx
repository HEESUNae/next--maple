'use client';

import { useState } from 'react';
import { Button } from '..';

interface TabProps {
  tabMenus: string[];
}

export function Tab({ tabMenus }: TabProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabActive = (idx: number) => {
    setActiveTab(idx);
  };

  return (
    <>
      {tabMenus.map((tab, idx) => (
        <Button key={tab} onClick={() => handleTabActive(idx)}>
          {tab}
        </Button>
      ))}
    </>
  );
}
