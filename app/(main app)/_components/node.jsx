"use client";

import {ArrowDown, ArrowRight, Edit, File, Folder} from "lucide-react";

export const Node = ({node, style, dragHandle, tree}) => {
    const CustomIcon = node.data.icon;
    const iconColor = node.data.iconColor;

    return (
        <div
            className={`flex h-[100%] items-center ${node.state.isSelected ? "bg-primary/5" : ""}`}
            style={style}
            ref={dragHandle}
        >
            <div
                role="treeitem"
                className="flex h-[100%] w-[135px] items-center"
                onClick={() => node.isInternal && node.toggle()}
            >
                {node.isLeaf ? (
                    <>
                        <span className="flex items-center ml-[7px]"></span>
                        <span className="flex items-center ml-[7px]">
              {CustomIcon ? (
                  <CustomIcon className="text-muted-foreground"/>
              ) : (
                  <File size={20} className="text-muted-foreground mr-0.5"/>
              )}
            </span>
                    </>
                ) : (
                    <>
            <span>
              {node.children.length !== 0 ?
                  node.isOpen ?  <ArrowDown size={17}/> : <ArrowRight size={17}/>
              : ""}
            </span>
                        <span>
              {CustomIcon ? (
                  <CustomIcon color={iconColor}/>
              ) : (
                  <Folder size={20} className={node.children.length !== 0 ? 'mr-0.5' : 'ml-4 mr-0.5'}/>
              )}
            </span>
                    </>
                )}
                <span className="flex">
          {node.isEditing ? (
              <input
                  className="bg-gray-100 w-[100px] h-5 "
                  type="text"
                  defaultValue={node.data.name}
                  onFocus={(e) => e.currentTarget.select()}
                  onBlur={() => node.reset()}
                  onKeyDown={(e) => {
                      if (e.key === "Escape") node.reset();
                      if (e.key === "Enter") node.submit(e.currentTarget.value);
                  }}
                  autoFocus
              />
          ) : (
              <span>{node.data.name}</span>
          )}
        </span>
            </div>
            <div className="flex pl-4 h-100%">
                <div className="flex flex-row items-center mr-2">
                    <button onClick={() => node.edit()} title="Rename...">
                        <Edit size={17}/>
                    </button>
                </div>
            </div>
        </div>
    );
};
