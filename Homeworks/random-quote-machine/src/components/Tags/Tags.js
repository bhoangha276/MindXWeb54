import axios from "axios";
import React, { Component } from "react";
import "./Tags.css";

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tags: [],
        currentTags: [],
        };
    }

    async componentDidMount() {
            this.fetchTags();
    }

    fetchTags = async () => {
        try {
            const res = await axios.get("https://api.quotable.io/tags");
            this.setState({
                tags: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    handleToggleTag = (tagToggle) => {
            this.setState((prev) => {
                const { currentTags } = prev;
                if (currentTags.includes(tagToggle)) {
                    return {
                    currentTags: currentTags.filter((tag) => tag !== tagToggle),
                    };
                }
                return {
                    currentTags: [...currentTags, tagToggle],
                };
            });
    };

    render() {
        const { tags, currentTags } = this.state;

        return (
            <div className="Tags">
                {tags.map((tag) => {
                    const cls = currentTags.includes(tag.name)? "tag-item active": "tag-item";
                    return (                            
                        <span
                            key={tag._id}
                            className={cls}
                            onClick={() => this.handleToggleTag(tag.name)}
                            >
                                {tag.name}
                        </span>
                        );
                    })}
                </div>
        );
    }
}

export default Tags;
