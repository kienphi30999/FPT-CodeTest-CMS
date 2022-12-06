import React from "react";
import { Input, Tag, Button } from "antd";
import "./styles.css";

const TagInput = (props) => {
  const { value, onChange, id } = props;
  const [inputValue, setInputValue] = React.useState();

  const handleAddTag = () => {
    let newValue = value ? [...value, inputValue] : [inputValue];
    onChange?.(newValue);
    setInputValue();
  };

  const handleCloseTag = (word) => {
    let newValue = value?.filter((w) => w !== word);
    onChange?.(newValue);
  };
  return (
    <>
      <div id={id} className="tag-input--wrapper">
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onPressEnter={handleAddTag}
          placeholder="Tên menu"
        />
        <Button type="primary" onClick={handleAddTag}>
          Thêm
        </Button>
      </div>
      {value && value?.length > 0 && (
        <div className="tag-input--value">
          {value?.map((word, index) => {
            return (
              <Tag
                key={index}
                id={`tag-${word}-${index}`}
                visible
                closable
                onClose={() => handleCloseTag(word)}
              >
                {word}
              </Tag>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TagInput;
