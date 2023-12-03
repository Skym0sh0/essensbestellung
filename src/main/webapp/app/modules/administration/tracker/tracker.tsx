import React from 'react';

import { useAppSelector } from 'app/config/store';

export const TrackerPage = () => {
  const activities = useAppSelector(state => state.administration.tracker.activities);

  return (
    <div>
      <h2>Echtzeit Benutzer-Aktivitäten</h2>
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th>
              <span>Benutzer</span>
            </th>
            <th>
              <span>IP Adresse</span>
            </th>
            <th>
              <span>Aktuelle Seite</span>
            </th>
            <th>
              <span>Zeit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, i) => (
            <tr key={`log-row-${i}`}>
              <td>{activity.userLogin}</td>
              <td>{activity.ipAddress}</td>
              <td>{activity.page}</td>
              <td>{activity.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackerPage;
