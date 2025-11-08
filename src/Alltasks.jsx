// AllTasks.jsx
import React, { Suspense } from 'react';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task6 from './Task6';
import Task7 from './Task7';
import Task8 from './Task8';
import Task9 from './Task9';
import Task10 from './Task10';
import Task11 from './Task11';

const LazyTask5 = React.lazy(() => import('./Task5'));

const AllTasks = () => {
  return (
    <div className="all-tasks-page">
      <div className="task-section"><Task1 /></div>
      <div className="task-section"><Task2 /></div>
      <div className="task-section"><Task3 /></div>
      <div className="task-section"><Task4 /></div>
      <div className="task-section">
        <Suspense fallback={<h3>Loading Task5...</h3>}>
          <LazyTask5 />
        </Suspense>
      </div>
      <div className="task-section"><Task6 /></div>
      <div className="task-section"><Task7 /></div>
      <div className="task-section"><Task8 /></div>
      <div className="task-section"><Task9 /></div>
      <div className="task-section"><Task10 /></div>
            <div className="task-section"><Task11/></div>
    </div>
  );
};

export default AllTasks;
