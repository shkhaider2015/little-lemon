import React, { lazy, Suspense } from 'react';
import Loader from '../Loader';

const Home = lazy(() => import("../home"));
const ReserveTable = lazy(() => import("../reserveTable"));


export const LazyHome = () => <Suspense fallback={<Loader />} >
    <Home />
</Suspense>

export const LazyReserveTable = () => <Suspense fallback={<Loader />} >
    <ReserveTable />
</Suspense>