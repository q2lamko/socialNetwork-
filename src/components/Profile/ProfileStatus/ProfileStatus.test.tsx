import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={()=>{}}/>);
        const instance = component.getInstance();
        // @ts-ignore
        expect(instance.state.status).toBe("it-kamasutra.com");
    });
    test("after creation span should be displayed", async () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={()=>{}}/>);
        const root = component.root;
        let span = await root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input should`t be displayed",  () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={()=>{}}/>);
        const root = component.root;
        expect(async () => {
            let input = await root.findByType("input");
        }).toThrowError();
    });
    test("after creation span should be displayed with correct status", async () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={()=>{}}/>);
        const root = component.root;
        let span = await root.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com");
    });
    test("input should be displayed instead of span", async () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={()=>{}}/>);
        const root =  component.root;
        let span = await root.findByType("span");
        span.props.onDoubleClick();
        let input =await root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });
    test("callback should be called",  () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        // @ts-ignore
        instance.deactivateMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
