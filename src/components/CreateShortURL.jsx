import React, { useState } from "react";
import { useURLContext } from "../context/URLContext";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Alert,
  Stack
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CreateShortURL = () => {
  const { createShortURL } = useURLContext();
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [validity, setValidity] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setCopied(false);
    if (!longUrl.trim()) {
      setError("Please enter a valid URL.");
      return;
    }
    const { shortCode, error: createError } = createShortURL({
      longUrl: longUrl.trim(),
      validityMinutes: validity,
      customCode: customCode.trim() || undefined,
    });
    if (createError) {
      setError(createError);
    } else {
      setResult(`${window.location.origin}/s/${shortCode}`);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto", mt: 6 }}>
      <Typography variant="h5" gutterBottom>
        Create a Short URL
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            label="Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
            fullWidth
            autoFocus
            placeholder="https://example.com/very/long/url"
          />
          <TextField
            label="Custom Shortcode (optional)"
            value={customCode}
            onChange={(e) => setCustomCode(e.target.value)}
            inputProps={{ maxLength: 12 }}
            fullWidth
            placeholder="e.g. myCustom123"
          />
          <TextField
            label="Validity (minutes)"
            value={validity}
            onChange={(e) => setValidity(e.target.value.replace(/[^0-9]/g, ""))}
            fullWidth
            placeholder="Defaults to 30"
            InputProps={{ inputProps: { min: 1, max: 1440 } }}
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Shorten URL
          </Button>
        </Stack>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      {result && (
        <Alert severity="success" sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <Box sx={{ flexGrow: 1 }}>
            <strong>Short URL:</strong> {result}
          </Box>
          <InputAdornment position="end">
            <IconButton onClick={handleCopy} edge="end" color={copied ? "success" : "default"}>
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
          {copied && (
            <Typography variant="caption" color="success.main" sx={{ ml: 1 }}>
              Copied!
            </Typography>
          )}
        </Alert>
      )}
    </Paper>
  );
};

export default CreateShortURL;
