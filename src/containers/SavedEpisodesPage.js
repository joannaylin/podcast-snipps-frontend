import React, { Component } from "react";
import { connect } from "react-redux";
import EpisodeContainer from "../components/EpisodeContainer";
import NavBar from "../components/NavBar";
import { fetchEpisodes } from "../actions/episode";
import { styled } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const EpisodeDiv = styled(Grid)({
  marginLeft: "300px",
  paddingTop: "50px",
});

const Dropdown = styled(Select)({
  backgroundColor: "white",
  width: "270px",
  height: "40px",
  borderRadius: "30px",
});

class SavedEpisodesPage extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: "",
    };
  }

  componentDidMount() {
    this.props.fetchEpisodes();
  }

  handleChange = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  };

  sortBy = () => {
    const sortedEpisodes = this.props.episodes;
    switch (this.state.sortBy) {
      case "alphabetical-episode":
        return sortedEpisodes.slice().sort((ep1, ep2) => {
          return ep1.episode_name.localeCompare(ep2.episode_name);
        });
      case "alphabetical-show":
        return sortedEpisodes.slice().sort((ep1, ep2) => {
          return ep1.show_name.localeCompare(ep2.show_name);
        });
      case "duration":
        return sortedEpisodes.slice().sort((ep1, ep2) => {
          return ep1.duration - ep2.duration;
        });
      default:
        return sortedEpisodes;
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <EpisodeDiv>
          <Typography variant="h3" gutterBottom style={{ color: "#1DB954" }}>
            Episodes
          </Typography>
          <FormControl>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Dropdown
              variant="outlined"
              value={this.state.sortBy}
              onChange={this.handleChange}
              id="sort-by"
            >
              <MenuItem value="alphabetical-episode">
                Alphabetical- Episode Name
              </MenuItem>
              <MenuItem value="alphabetical-show">
                Alphabetical- Show Name
              </MenuItem>
              <MenuItem value="duration">Duration</MenuItem>
            </Dropdown>
          </FormControl>
          <Grid>
            <EpisodeContainer episodes={this.sortBy()} />
          </Grid>
        </EpisodeDiv>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes.usersEpisodes,
  };
};

export default connect(mapStateToProps, { fetchEpisodes })(SavedEpisodesPage);
