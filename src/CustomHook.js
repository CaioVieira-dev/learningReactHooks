import { useState, useEffect } from 'react';

function useCustomHook(param) {
    const [result, setResult] = useState(param);

    //setResult(param + 'outra coisa');
    useEffect(() => {
        function change() {
            setResult(param + 'outra coisa');
        }

        change();
    });

    return [result, setResult];
}
export default useCustomHook;