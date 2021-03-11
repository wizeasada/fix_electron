import React from 'react';
import AddLinks from './addLinks';

const LinkBlocks: React.FC = () => {
  return (
    <>
      <div className="flex-1 text-gray-700 text-center bg-gray-100 rounded-lg px-4 py-4 my-8 ml-8">
        <AddLinks />
      </div>
      <div className="flex-1 text-gray-700 text-center bg-gray-100 rounded-md px-4 py-4 m-8"></div>
      <div className="flex-1 text-gray-700 text-center bg-gray-100 rounded-md px-4 my-8 mr-8"></div>
    </>
  );
};
export default LinkBlocks;

// {
//   "name": "client",
//   "version": "1.0.0",
//   "private": true,
//   "homepage": "http://.",
//   "main": "build/electron/main.js",
//   "author": "wize",
//   "description": "client",
//   "scripts": {
//     "start": "react-scripts start",
//     "prestart": "npm run build:tailwind",
//     "build": "react-scripts build",
//     "build:tailwind": "tailwindcss build src/index.css -o src/tailwind.output.css",
//     "prebuild": "npm run build:tailwind",
//     "test:electron": "react-scripts test",
//     "eject": "react-scripts eject",
//     "postinstall": "electron-builder install-app-deps",
//     "start-dev": "concurrently \"BROWSER=none npm start\" \"wait-on http://localhost:3000 && tsc -p electron -w\" \"wait-on http://localhost:3000 && tsc -p electron && electron .\"",
//     "build-app": "npm run build && tsc -p electron && electron-builder",
//     "watch": "npm run clean && tsc -w",
//     "test": "jest",
//     "test-ci": "jest --ci"
//   },
//   "build": {
//     "extends": null,
//     "files": [
//       "build/**/*"
//     ],
//     "directories": {
//       "buildResources": "assets"
//     }
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "husky": {
//     "hooks": {
//       "pre-push": "npx tsc --noEmit && npx lint-staged"
//     }
//   },
//   "lint-staged": {
//     "*.{js,jsx}": [
//       "eslint --fix",
//       "git add"
//     ]
//   },
//   "dependencies": {
//     "@fortawesome/fontawesome-svg-core": "^1.2.34",
//     "@fortawesome/free-brands-svg-icons": "5.15.2",
//     "@fortawesome/free-regular-svg-icons": "^5.15.2",
//     "@fortawesome/free-solid-svg-icons": "5.15.2",
//     "@fortawesome/react-fontawesome": "0.1.14",
//     "@testing-library/jest-dom": "5.11.9",
//     "@testing-library/react": "11.2.5",
//     "@testing-library/user-event": "12.7.0",
//     "@types/react": "17.0.2",
//     "@types/react-dom": "17.0.1",
//     "@types/react-redux": "7.1.16",
//     "@types/redux": "3.6.0",
//     "electron-is-dev": "1.2.0",
//     "electron-reload": "1.5.0",
//     "react": "17.0.1",
//     "react-dom": "17.0.1",
//     "react-router-scroll-memory": "2.0.7",
//     "react-scripts": "4.0.2",
//     "tailwindcss": "2.0.3",
//     "typescript": "4.1.5",
//     "web-vitals": "1.1.0"
//   },
//   "devDependencies": {
//     "@types/electron-devtools-installer": "2.2.0",
//     "@types/jest": "26.0.20",
//     "concurrently": "5.3.0",
//     "electron": "11.2.3",
//     "electron-builder": "22.9.1",
//     "electron-devtools-installer": "3.1.1",
//     "eslint": "7.20.0",
//     "eslint-config-prettier": "7.2.0",
//     "eslint-plugin-prettier": "3.3.1",
//     "eslint-plugin-react": "7.22.0",
//     "husky": "5.0.9",
//     "jest": "26.6.0",
//     "ts-jest": "26.5.1",
//     "wait-on": "5.2.1"
//   },
//   "license": "ISC"
// }
