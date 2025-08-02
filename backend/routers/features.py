from fastapi import APIRouter, Depends, HTTPException
# from db import Session, get_session, User
from sqlmodel import select
from typing import Annotated
import schemas
from fastapi import UploadFile, File
from fastapi import Depends
from typing import Annotated

from modules.ai import analyze_question

# SessionDep = Annotated[Session, Depends(get_session)]


router = APIRouter(
    prefix="/features",
    tags=["features"],
    # dependencies=[Depends(get_token_header)],
    responses={404: {"description": "Not found"}},
)

# psot request receive image
@router.post("/snap")
async def read_users_me(
    file: UploadFile = File(...),
):
    """
    Analyze a question using the Gemini model.
    """
    if not file.content_type.startswith('image/'):
        raise HTTPException(status_code=400, detail="File must be an image")

    image_bytes = await file.read()
    
    response = analyze_question(image_bytes)
    
    return response