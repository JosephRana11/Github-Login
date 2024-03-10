"""reconfig

Revision ID: 671ce77e635b
Revises: 065ee954082f
Create Date: 2024-03-10 22:50:14.571285

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '671ce77e635b'
down_revision: Union[str, None] = '065ee954082f'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
