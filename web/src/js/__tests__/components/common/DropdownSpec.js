import React from "react"
import Dropdown, {Divider, MenuItem, SubMenu} from '../../../components/common/Dropdown'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'


test('Dropdown', async () => {
    let onOpen = jest.fn();
    const {asFragment} = render(
        <Dropdown text="open me" onOpen={onOpen}>
            <MenuItem onClick={() => 0}>click me</MenuItem>
            <Divider/>
            <MenuItem onClick={() => 0}>click me</MenuItem>
        </Dropdown>
    )
    expect(asFragment()).toMatchSnapshot()

    fireEvent.click(screen.getByText("open me"))
    await waitFor(() => expect(onOpen).toBeCalledWith(true))
    expect(asFragment()).toMatchSnapshot()

    onOpen.mockClear()
    document.body.click()
    await waitFor(() => expect(onOpen).toBeCalledWith(false))
})

test('SubMenu', async () => {
    const {asFragment} = render(
        <SubMenu title="submenu">
            <MenuItem onClick={() => 0}>click me</MenuItem>
        </SubMenu>
    )
    expect(asFragment()).toMatchSnapshot()

    fireEvent.mouseEnter(screen.getByText("submenu"))
    let item = await waitFor(() => screen.getByText("click me"))
    expect(asFragment()).toMatchSnapshot()

    fireEvent.mouseLeave(screen.getByText("submenu"))
    expect(screen.queryByText("click me")).toBeNull()
    expect(asFragment()).toMatchSnapshot()
})

test('MenuItem', async () => {
    let click = jest.fn();
    const {asFragment} = render(
        <MenuItem onClick={click}>click me</MenuItem>
    )
    expect(asFragment()).toMatchSnapshot()
    fireEvent.click(screen.getByText("click me"))
    expect(click).toBeCalled()
})
