import React from 'react';

function App() {
  return (
    <div>
      <h1>JSON Updater</h1>
      <p>
        Compare two JSON and choose which differences you want to merge in the
        file.
      </p>
      <form>
        <textarea name="source1" id="source1" cols="30" rows="10" />
        <textarea name="source2" id="source2" cols="30" rows="10" />

        <button type="submit">Compare and proceed</button>
      </form>
    </div>
  );
}

export default App;
