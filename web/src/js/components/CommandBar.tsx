import React, { useState, Component } from 'react'
import classnames from 'classnames'
import { Key, fetchApi } from '../utils.js'

export default function CommandBar() {
    const [command, setCommand] = useState("")
    const [results, setResults] = useState([])

    const onChange = (e) =>  {
        setCommand(e.target.value)
    }

    const onKeyDown = (e) => {
        if (e.keyCode === Key.ENTER) {
            const body = {"command": command}

            fetchApi(`/commands`, {method: 'POST', body: JSON.stringify(body)})
            .then(response => response.json())
            .then(data => {
                if (data.result == "") return
                setResults([...results, {"id": results.length, "result": data.result}])
            })

            setCommand("")
        }
        e.stopPropagation()
    }

    return (
        <>
            <div className="command">
                Command Result
            </div>
            <div className="command-result">
                {results.map(result => (
                    <div key={result.id}>
                        {result.result}
                    </div>
                ))}
            </div>
            <div className={classnames('command-input input-group')}>
                <span className="input-group-addon">
                    <i className={'fa fa-fw fa-terminal'}/>
                </span>
                <input
                    type="text"
                    placeholder="Enter command"
                    className="form-control"
                    value={command}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </div>
        </>
    )
}