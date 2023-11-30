"use client";

import { useRef, useState } from "react";
import { Tree } from "react-arborist";

import { data } from "@/data";
import {Node} from "./node";


export const FolderList = () => {
    const [term, setTerm] = useState("");
    const treeRef = useRef(null);

    const onRename = ({ id, name }) => {
        const node = treeRef.current.get(id);
        if (node) {
            node.data.name = name;
        }
    };

    const onMove = ({ dragIds, parentId, index }) => {};

    return (
        <div className="pl-4">
            <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 w-[169px] h-6 mb-3"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
            <Tree
                className="cursor-pointer w-[260px] h-[500px] text-sm"
                data={data}
                ref={treeRef}
                indent={24}
                rowHeight={32}
                openByDefault={false}
                searchTerm={term}
                searchMatch={(node, term) =>
                    node.data.name.toLowerCase().includes(term.toLowerCase())
                }
                onRename={onRename}
                onMove={onMove}
            >
                {Node}
            </Tree>
        </div>
    );
};
