import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChapterOne } from '../modules/chapter-1';
import Auth from '../modules/chapter-2/widgets/auth';
import LayoutInit from '../components/LayoutInit';
import { ChapterTwo } from '../modules/chapter-2';

export default function BaseRoute() {
  const arr=[
    {path:'chapter-1', element:<ChapterOne/>},
    {path:'chapter-2', element:<ChapterTwo/>}]
  return (
    <React.Suspense>
      <Routes>
        <Route path='sign-in' element={<Auth/>} />
        <Route path='sign-out' element={<Auth/>} />
        {arr.map((a) => (
          <Route path={a.path} element={
          <LayoutInit>
            {a.element}
          </LayoutInit>} />
        ))}
      </Routes>
    </React.Suspense>
  );
}
